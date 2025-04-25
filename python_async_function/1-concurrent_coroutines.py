#!/usr/bin/env python3
"""
This module contains a function that adds two
float numbers and returns the result as a float.
The function is annotated with type hints to indicate
the expected types of the arguments and the return value.
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.

    Args:
        n: Number of times to spawn wait_random
        max_delay: Maximum delay for wait_random

    Returns:
        List of delays in ascending order
    """
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        delay = await task
        idx = 0
        while idx < len(delays) and delays[idx] < delay:
            idx += 1
        delays.insert(idx, delay)
    return delays
