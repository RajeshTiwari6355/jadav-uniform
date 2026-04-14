import Types "types/products-and-inquiries";
import Lib "lib/products-and-inquiries";
import ProductsAndInquiriesMixin "mixins/products-and-inquiries-api";
import List "mo:core/List";

actor {
  let products : List.List<Types.Product> = Lib.initProducts();
  let inquiries : List.List<Types.Inquiry> = List.empty<Types.Inquiry>();
  var nextInquiryId : Nat = 0;

  include ProductsAndInquiriesMixin(products, inquiries, nextInquiryId);
};
