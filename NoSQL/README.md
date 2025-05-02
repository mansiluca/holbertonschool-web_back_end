# NoSQL

## Introduction
This project focuses on NoSQL databases, particularly MongoDB. The aim is to understand the differences between SQL and NoSQL, learn how to use MongoDB for basic operations, and develop familiarity with NoSQL query languages.

## Learning Objectives
- Understand what NoSQL means
- Differentiate between SQL and NoSQL
- Learn about ACID properties
- Recognize what is document storage
- Understand different NoSQL types
- Know benefits of NoSQL
- Query information from a NoSQL database
- Insert/Update/Delete information in a NoSQL database
- Use MongoDB effectively

## Requirements
- MongoDB (version 4.2)
- Python 3.7 or higher
- pymongo module
- All files should end with a new line
- First line of files should be `#!/usr/bin/env python3`

## Installation
```bash
# Install MongoDB on Ubuntu
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" > /etc/apt/sources.list.d/mongodb-org-4.2.list
$ apt-get update
$ apt-get install -y mongodb-org

# Install PyMongo
$ pip3 install pymongo
```

## Tasks
* Connect to MongoDB
* Insert documents
* Query documents
* Update documents
* Delete documents
* Perform aggregation operations

## Resources
- [MongoDB Documentation](https://docs.mongodb.com/)
- [PyMongo Documentation](https://pymongo.readthedocs.io/)
- [Introduction to NoSQL](https://www.youtube.com/watch?v=qUV2j3XBRHc)

## Author
- Mansi Luca