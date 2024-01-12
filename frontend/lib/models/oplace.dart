class Oplace {
  String name;
  String oTag;
  String description;


  Oplace({
    required this.name,
    required this.oTag,
    required this.description,
  });

  factory Oplace.fromJson(Map<String, dynamic> json) {
    return Oplace(
      name: json['name'],
      oTag: json['otag'],
      description: json['description'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'otag': oTag,
      'description': description,
    };
  }
}
