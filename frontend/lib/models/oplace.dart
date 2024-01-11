
class Oplace {
  String name;
  String oTag;
  String description;
  List<String> products;

  Oplace({
    required this.name,
    required this.oTag,
    required this.description,
    required this.products,
  });

  factory Oplace.fromJson(Map<String, dynamic> json) {
    return Oplace(
      name: json['name'],
      oTag: json['o_tag'],
      description: json['description'],
      products: List<String>.from(json['products']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'o_tag': oTag,
      'description': description,
      'products': products,
    };
  }
}
