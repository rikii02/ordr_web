
class Oplace {
  String id;
  String name;
  String oTag;
  String description;
  List<String> products;

  Oplace({
    required this.id,
    required this.name,
    required this.oTag,
    required this.description,
    required this.products,
  });

  factory Oplace.fromJson(Map<String, dynamic> json) {
    return Oplace(
      id: json['id'],
      name: json['name'],
      oTag: json['o_tag'],
      description: json['description'],
      products: List<String>.from(json['products']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'o_tag': oTag,
      'description': description,
      'products': products,
    };
  }
}
