#!/usr/bin/env python3
"""
This module contains a function that adds two float
numbers and returns the result as a float.
The function is annotated with type hints to indicate
the expected types of the arguments and the return value.
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Waits for a random delay between 0 and max_delay seconds and returns it.

    Args:
        max_delay: maximum delay in seconds (default: 10)

    Returns:
        Random delay time that was waited
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
