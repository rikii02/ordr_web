import 'package:flutter/material.dart';
import '../api.dart';
import '../models/oplace.dart';

class OplacesPage extends StatefulWidget {
  const OplacesPage({Key? key}) : super(key: key);

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Oplaces'),
      ),
      body: Center(
        child: oplaces.isEmpty
            ? const CircularProgressIndicator() // Puedes mostrar un indicador de carga mientras se cargan los datos
            : ListView.builder(
                itemCount: oplaces.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(oplaces[index].name),
                    subtitle: Text(oplaces[index].description),
                  );
                },
              ),
      ),
    );
  }
}

