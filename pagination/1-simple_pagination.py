#!/usr/bin/env python3
"""
Module that provides a simple helper function
"""
import csv
from typing import List
import typing


def index_range(page: int, page_size: int) -> typing.Tuple[int, int]:
    """
    Returns a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return for the given pagination
    parameters.
    """
    assert isinstance(page, int) and isinstance(page_size, int)
    assert page > 0 and page_size > 0
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get a page of the dataset
        """
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0

        dataset = self.dataset()
        start_idx, end_idx = index_range(page, page_size)

        if start_idx >= len(dataset):
            return []

        return dataset[start_idx:end_idx]
