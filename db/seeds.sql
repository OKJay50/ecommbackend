-- Insert sample categories
INSERT INTO Category (category_name) VALUES
  ('Electronics'),
  ('Clothing'),
  ('Books'),
  ('Home Goods');

-- Insert sample products
INSERT INTO Product (product_name, price, stock, category_id) VALUES
  ('Laptop', 999.99, 15, 1),
  ('T-shirt', 19.99, 50, 2),
  ('Book', 14.95, 25, 3),
  ('Chair', 89.50, 30, 4);

-- Insert sample tags
INSERT INTO Tag (tag_name) VALUES
  ('Gaming'),
  ('Fashion'),
  ('Technology'),
  ('Furniture');

-- Insert sample product tags
INSERT INTO ProductTag (product_id, tag_id) VALUES
  (1, 1),
  (1, 3),
  (2, 2),
  (3, 3),
  (4, 4);
