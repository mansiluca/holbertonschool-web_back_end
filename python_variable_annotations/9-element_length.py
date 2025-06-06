#!/usr/bin/env python3
"""
Module that provides a function to calculate
the length of each element in a list
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes a list of strings and returns a list
    of tuples with each string and its length.
    """
    return [(i, len(i)) for i in lst]
