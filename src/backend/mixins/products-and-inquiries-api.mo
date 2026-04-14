import Types "../types/products-and-inquiries";
import Lib "../lib/products-and-inquiries";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  products : List.List<Types.Product>,
  inquiries : List.List<Types.Inquiry>,
  nextInquiryId : Nat
) {
  public query func getProducts() : async [Types.Product] {
    Runtime.trap("not implemented");
  };

  public query func getProductById(id : Nat) : async ?Types.Product {
    Runtime.trap("not implemented");
  };

  public query func getProductsByCategory(category : Types.Category) : async [Types.Product] {
    Runtime.trap("not implemented");
  };

  public func submitInquiry(submission : Types.InquirySubmission) : async Types.InquiryResult {
    Runtime.trap("not implemented");
  };

  public query func getInquiries() : async [Types.Inquiry] {
    Runtime.trap("not implemented");
  };
};
