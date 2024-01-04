import 'package:flutter/material.dart';
import '../api.dart';
import '../models/oplace.dart';

class OplacesPage extends StatefulWidget {
  @override
  _OplacesPageState createState() => _OplacesPageState();
}

class _OplacesPageState extends State<OplacesPage> {
  List<Oplace> oplaces = [];

  @override
  void initState() {
    super.initState();
    fetchOplaces();
  }

  Future<void> fetchOplaces() async {
    try {
      final fetchedOplaces = await Api.fetchOplaces();
      setState(() {
        oplaces = fetchedOplaces;
      });
    } catch (e) {
      // Manejar el error
      print('Error al cargar los lugares: $e');
    }
  }

  Future<void> createOplace() async {
    try {
      await Api.createOplace(Oplace(
        id: '1', // Puedes asignar un valor único al id o generarlo en el backend
        name: 'Nuevo Oplace',
        oTag: 'tag123',
        description: 'Descripción del nuevo Oplace',
        products: ['Producto 1', 'Producto 2'],
      ));
      // Actualiza la lista después de crear el Oplace
      fetchOplaces();
    } catch (e) {
      // Manejar el error
      print('Error al crear el lugar: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Oplaces'),
      ),
      body: Center(
        child: ListView.builder(
          itemCount: oplaces.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(oplaces[index].name),
              subtitle: Text(oplaces[index].description),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => createOplace(),
        child: Icon(Icons.add),
      ),
    );
  }
}
