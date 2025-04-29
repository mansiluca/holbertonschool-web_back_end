#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = 0, page_size: int = 10) -> Dict:
        """
        Returns a dictionary containing the following pagination information:
        - index: the current start index
        - next_index: the next index to query with
        - page_size: the current page size
        - data: the actual page of the dataset
        """

        assert isinstance(index, type(page_size)) == int
        assert index >= 0 and page_size > 0

        dataset = self.indexed_dataset()
        data_length = len(dataset)
        assert index < data_length

        data = []
        current_idx = index
        items_count = 0

        while items_count < page_size and current_idx < data_length:
            if current_idx in dataset:
                data.append(dataset[current_idx])
                items_count += 1
            current_idx += 1

        next_index = current_idx

        return {
            'index': index,
            'next_index': next_index,
            'page_size': len(data),
            'data': data
        }
