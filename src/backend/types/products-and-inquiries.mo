module {
  public type Category = { #school; #college };

  public type Product = {
    id : Nat;
    name : Text;
    category : Category;
    description : Text;
    sizes : [Text];
    colors : [Text];
    price : Nat;
    imageUrl : Text;
  };

  public type InquirySubmission = {
    name : Text;
    email : Text;
    phone : Text;
    productId : ?Nat;
    size : Text;
    color : Text;
    quantity : Nat;
    message : Text;
  };

  public type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    productId : ?Nat;
    size : Text;
    color : Text;
    quantity : Nat;
    message : Text;
    timestamp : Int;
  };

  public type InquiryResult = { #ok : Nat; #err : Text };
};
