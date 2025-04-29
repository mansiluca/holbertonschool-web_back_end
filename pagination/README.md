# Pagination

This project focuses on implementing pagination for APIs and datasets in a back-end web application. Pagination is essential for handling large datasets efficiently by dividing results into manageable chunks or pages.

## Learning Objectives

* How to paginate a dataset with simple page and page_size parameters
* How to paginate a dataset with hypermedia metadata
* How to paginate in a deletion-resilient manner

## Requirements

* All files will be interpreted/compiled on Ubuntu 18.04 LTS using Python 3.7
* All files should end with a new line
* First line of all files should be `#!/usr/bin/env python3`
* Code should use the pycodestyle style (version 2.5.*)
* All modules, classes, and functions should be documented
* All functions should be type-annotated

## Files

* `0-simple_helper_function.py`: Simple helper function for pagination
* `1-simple_pagination.py`: Simple pagination implementation
* `2-hypermedia_pagination.py`: Pagination with hypermedia metadata
* `3-hypermedia_del_pagination.py`: Deletion-resilient pagination

## Setup and Usage

```bash
# Clone the repository
git clone https://github.com/yourusername/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/pagination

# Run the tests
python3 -m unittest test_files/*.py
```

## Example Usage

```python
from 1-simple_pagination import Server

server = Server()
try:
    should_be_page_1 = server.get_page(1, 3)
    print(should_be_page_1)
except AssertionError:
    print("AssertionError raised with negative values")
```

## Author
Mansi Luca