import pytest
from app import add, subtract, multiply, divide, percentage

pip install pytest
def test_add():
    assert add(3, 5) == 8
    assert add(-1, 1) == 0
    assert add(-1, -1) == -2

def test_subtract():
    assert subtract(10, 5) == 5
    assert subtract(-1, 1) == -2
    assert subtract(-1, -1) == 0

def test_multiply():
    assert multiply(3, 5) == 15
    assert multiply(-1, 1) == -1
    assert multiply(-1, -1) == 1
    

def test_divide():
    assert divide(10, 2) == 5
    assert divide(-1, 1) == -1
    assert divide(-1, -1) == 1
    assert divide(5, 0) == "Error! Division by zero."

def test_percentage():
    assert percentage(50, 100) == 50
    assert percentage(25, 100) == 25
    assert percentage(0, 100) == 0
    assert percentage(50, 0) == "Error! Division by zero."

if __name__ == "__main__":
    pytest.main()
