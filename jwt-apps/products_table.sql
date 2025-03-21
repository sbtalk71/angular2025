CREATE TABLE mytable(
   id                 INTEGER  NOT NULL PRIMARY KEY 
  ,title              VARCHAR(26) NOT NULL
  ,description        VARCHAR(156) NOT NULL
  ,price              INTEGER  NOT NULL
  ,discountPercentage NUMERIC(5,2) NOT NULL
  ,rating             NUMERIC(4,2) NOT NULL
  ,stock              INTEGER  NOT NULL
  ,brand              VARCHAR(17) NOT NULL
  ,category           VARCHAR(15) NOT NULL
);
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (1,'iPhone 9','An apple mobile which is nothing like apple',549,12.96,4.69,94,'Apple','smartphones');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (2,'iPhone X','SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',899,17.94,4.44,34,'Apple','smartphones');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (3,'Samsung Universe 9','Samsung''s new variant which goes beyond Galaxy to the Universe',1249,15.46,4.09,36,'Samsung','smartphones');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (22,'Elbow Macaroni - 400 gm','Product details of Bake Parlor Big Elbow Macaroni - 400 gm',14,15.58,4.57,146,'Bake Parlor Big','groceries');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (23,'Orange Essence Food Flavou','Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',14,8.04,4.85,26,'Baking Food Items','groceries');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (24,'cereals muesli fruit nuts','original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',46,16.8,4.94,113,'fauji','groceries');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (25,'Gulab Powder 50 Gram','Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',70,13.58,4.87,47,'Dry Rose','groceries');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (26,'Plant Hanger For Home','Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',41,17.86,4.08,131,'Boho Decor','home-decoration');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (27,'Flying Wooden Bird','Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',51,15.58,4.41,17,'Flying Wooden','home-decoration');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (28,'3D Embellishment Art Lamp','3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)',20,16.49,4.82,54,'LED Lights','home-decoration');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (29,'Handcraft Chinese style','Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',60,15.34,4.44,7,'luxury palace','home-decoration');
INSERT INTO mytable(id,title,description,price,discountPercentage,rating,stock,brand,category) VALUES (30,'Key Holder','Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',30,2.92,4.92,54,'Golden','home-decoration');
