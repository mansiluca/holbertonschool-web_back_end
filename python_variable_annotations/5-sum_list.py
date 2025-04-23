from typing import List

#!/usr/bin/env python3
"""
Module containing sum_list function
"""


def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats and returns their sum as a float.
    
    Args:
        input_list: A list of float values
        
    Returns:
        The sum of all elements in the list as float
    """
    return sum(input_list)