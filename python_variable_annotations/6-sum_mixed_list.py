#!/usr/bin/env python3
"""
Type-annotated function sum_mixed_list
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of a list of integers and floats.

    Args:
        mxd_lst: A list containing integers and floats

    Returns:
        The sum of all elements in mxd_lst as a float
    """
    return float(sum(mxd_lst))
