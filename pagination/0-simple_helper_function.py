#!/usr/bin/env python3
"""
Module that provides a simple helper function
"""

def index_range(page: int, page_size: int) -> tuple:
    """
    Returns a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return for the given pagination
    parameters.
    """
    assert type(page) == int and type(page_size) == int
    assert page > 0 and page_size > 0
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)