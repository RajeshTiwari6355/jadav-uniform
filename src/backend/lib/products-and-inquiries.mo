import Types "../types/products-and-inquiries";
import List "mo:core/List";

module {
  public func initProducts() : List.List<Types.Product> {
    let products = List.empty<Types.Product>();
    products.add({ id = 1; name = "School White Shirt"; category = #school; description = "Premium white cotton shirt for school students, comfortable and durable."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["White"]; price = 250; imageUrl = "/images/school-shirt-white.jpg" });
    products.add({ id = 2; name = "School Navy Trousers"; category = #school; description = "Smart navy blue trousers for school boys, easy care fabric."; sizes = ["24", "26", "28", "30", "32", "34"]; colors = ["Navy Blue"]; price = 350; imageUrl = "/images/school-trousers-navy.jpg" });
    products.add({ id = 3; name = "School Navy Skirt"; category = #school; description = "Pleated navy blue skirt for school girls, comfortable fit."; sizes = ["S", "M", "L", "XL"]; colors = ["Navy Blue"]; price = 300; imageUrl = "/images/school-skirt-navy.jpg" });
    products.add({ id = 4; name = "School Blazer"; category = #school; description = "Premium navy blazer with school crest, perfect for formal occasions."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["Navy Blue"]; price = 800; imageUrl = "/images/school-blazer.jpg" });
    products.add({ id = 5; name = "School Sports Kit"; category = #school; description = "Complete sports kit including shorts and t-shirt for physical education."; sizes = ["S", "M", "L", "XL"]; colors = ["White", "Navy Blue"]; price = 450; imageUrl = "/images/school-sports-kit.jpg" });
    products.add({ id = 6; name = "School Tie"; category = #school; description = "Official school tie in navy and gold stripes, machine washable."; sizes = ["One Size"]; colors = ["Navy Blue", "Gold"]; price = 120; imageUrl = "/images/school-tie.jpg" });
    products.add({ id = 7; name = "School Sweater"; category = #school; description = "Warm v-neck school sweater in navy blue, ideal for winter."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["Navy Blue"]; price = 400; imageUrl = "/images/school-sweater.jpg" });
    products.add({ id = 8; name = "College Formal Shirt"; category = #college; description = "Smart formal shirt for college students, available in multiple colors."; sizes = ["S", "M", "L", "XL", "XXL", "XXXL"]; colors = ["White", "Light Blue", "Grey"]; price = 350; imageUrl = "/images/college-formal-shirt.jpg" });
    products.add({ id = 9; name = "College Formal Trousers"; category = #college; description = "Well-tailored formal trousers for college boys, premium fabric."; sizes = ["28", "30", "32", "34", "36", "38"]; colors = ["Black", "Navy Blue", "Grey"]; price = 500; imageUrl = "/images/college-formal-trousers.jpg" });
    products.add({ id = 10; name = "College Kurta Set"; category = #college; description = "Traditional kurta-pyjama set for college cultural events and functions."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["White", "Cream", "Light Blue"]; price = 650; imageUrl = "/images/college-kurta-set.jpg" });
    products.add({ id = 11; name = "College Salwar Kameez"; category = #college; description = "Elegant salwar kameez for college girls, comfortable and stylish."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["Navy Blue", "White", "Grey"]; price = 600; imageUrl = "/images/college-salwar-kameez.jpg" });
    products.add({ id = 12; name = "College Lab Coat"; category = #college; description = "Professional white lab coat for science and medical college students."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["White"]; price = 450; imageUrl = "/images/college-lab-coat.jpg" });
    products.add({ id = 13; name = "College Sports Jersey"; category = #college; description = "Breathable sports jersey for college athletic teams and tournaments."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["Navy Blue", "White", "Gold"]; price = 380; imageUrl = "/images/college-sports-jersey.jpg" });
    products.add({ id = 14; name = "College Blazer"; category = #college; description = "Smart college blazer with gold buttons, perfect for formal events."; sizes = ["S", "M", "L", "XL", "XXL"]; colors = ["Navy Blue", "Black"]; price = 1200; imageUrl = "/images/college-blazer.jpg" });
    products
  };

  public func getProducts(products : List.List<Types.Product>) : [Types.Product] {
    products.toArray()
  };

  public func getProductById(products : List.List<Types.Product>, id : Nat) : ?Types.Product {
    products.find(func(p) { p.id == id })
  };

  public func getProductsByCategory(products : List.List<Types.Product>, category : Types.Category) : [Types.Product] {
    products.filter(func(p) { p.category == category }).toArray()
  };

  public func submitInquiry(
    inquiries : List.List<Types.Inquiry>,
    nextId : Nat,
    submission : Types.InquirySubmission,
    timestamp : Int
  ) : Nat {
    let inquiry : Types.Inquiry = {
      id = nextId;
      name = submission.name;
      email = submission.email;
      phone = submission.phone;
      productId = submission.productId;
      size = submission.size;
      color = submission.color;
      quantity = submission.quantity;
      message = submission.message;
      timestamp = timestamp;
    };
    inquiries.add(inquiry);
    nextId
  };

  public func getInquiries(inquiries : List.List<Types.Inquiry>) : [Types.Inquiry] {
    inquiries.toArray()
  };
};
