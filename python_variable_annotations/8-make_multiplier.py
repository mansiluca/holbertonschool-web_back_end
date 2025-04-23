#!/usr/bin/env python3
"""
Module that provides a function to create a multiplier function
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates a function that multiplies a float by a given multiplier

    Args:
        multiplier: The multiplication factor

    Returns:
        A function that takes a float and
        returns the product with multiplier
    """
    def multiplier_function(n: float) -> float:
        return n * multiplier

    return multiplier_function
