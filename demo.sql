-- create a table with 5 coloumns customer_id, customer_fname, customer_lname, customer_phone, customer_address
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_fname VARCHAR(50),
    customer_lname VARCHAR(50),
    customer_phone VARCHAR(15),
    customer_address VARCHAR(100)
);
-- fill in 5 rows in customers table
INSERT INTO customers (customer_id, customer_fname, customer_lname, customer_phone, customer_address) VALUES
(1, 'John', 'Doe', '123-456-7890', '123 Main St, Springfield, IL 62701'),
(2, 'Jane', 'Doe', '123-456-7891', '124 Main St, Springfield, IL 62701'),
(3, 'Jim', 'Doe', '123-456-7892', '125 Main St, Springfield, IL 62701'),
(4, 'Jill', 'Doe', '123-456-7893', '126 Main St, Springfield, IL 62701'),
(5, 'Jack', 'Doe', '123-456-7894', '127 Main St, Springfield, IL 62701');
-- show the data in customers table
SELECT * FROM customers;
