import 'dart:convert';
import 'package:http/http.dart' as http;
import 'models/oplace.dart';

class Api {
  static const String baseUrl = 'http://localhost:8081/api/v1/oplaces';

  static Future<List<Oplace>> fetchOplaces() async {
    final response = await http.get(Uri.parse(baseUrl));

    if (response.statusCode == 200) {
      Iterable list = json.decode(response.body);
      return list.map((model) => Oplace.fromJson(model)).toList();
    } else {
      throw Exception('Error al cargar los lugares');
    }
  }

  static Future<void> createOplace(Oplace oplace) async {
    final response = await http.post(
      Uri.parse(baseUrl),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(oplace.toJson()),
    );

    if (response.statusCode != 201) {
      throw Exception('Error al crear el lugar');
    }
  }

  // Agrega funciones para actualizar y eliminar Oplaces según tus necesidades
}
