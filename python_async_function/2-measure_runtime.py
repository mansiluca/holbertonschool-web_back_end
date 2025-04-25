#!/usr/bin/env python3
"""
This module contains a function that adds two
float numbers and returns the result as a float.
The function is annotated with type hints to
indicate the expected types of the arguments and the return value.
"""
import asyncio
import time
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total runtime of wait_n(n, max_delay) and return it.

    Args:
        n: Number of times to spawn wait_random
        max_delay: Maximum delay for wait_random

    Returns:
        Total runtime of wait_n(n, max_delay)
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    return end_time - start_time
