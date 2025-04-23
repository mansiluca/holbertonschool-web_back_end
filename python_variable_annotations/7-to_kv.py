#!/usr/bin/env python3
"""Module for to_kv function"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string and int/float and returns
    tuple with string and square of number.

    Args:
        k: A string
        v: An int or float

    Returns:
        A tuple containing k and the square of v as a float
    """
    return (k, float(v ** 2))
