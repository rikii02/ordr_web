import 'package:flutter/material.dart';
import '../api.dart';
import '../models/oplace.dart';
import '../widgets/oplace_form.dart';

class OplacesPage extends StatefulWidget {
  const OplacesPage({Key? key}) : super(key: key);

  @override
  _OplacesPageState createState() => _OplacesPageState();
}

class _OplacesPageState extends State<OplacesPage> {
  final TextEditingController nameController = TextEditingController();
  final TextEditingController otagController = TextEditingController();
  final TextEditingController descriptionController = TextEditingController();
  final TextEditingController productsController = TextEditingController();

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
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return OplaceForm(
          nameController: nameController,
          otagController: otagController,
          descriptionController: descriptionController,
          productsController: productsController,
          onCreatePressed: () async {
            await createOplaceFromForm();
            Navigator.of(context).pop(); // Cerrar el formulario
          },
        );
      },
    );
  }

  Future<void> createOplaceFromForm() async {
    print('Intentando crear un nuevo Oplace desde el formulario');
    String newName = nameController.text;
    String newOTag = otagController.text;
    String newDescription = descriptionController.text;
    List<String> newProducts = productsController.text.split(',');
    print('Nuevo Oplace creado exitosamente');

    try {
      // Enviar los datos al backend para crear un nuevo Oplace
      await Api.createOplace(Oplace(
        name: newName,
        oTag: newOTag,
        description: newDescription,
        products: newProducts,
      ));

      // Actualizar la lista después de crear el Oplace
      await fetchOplaces();
    } catch (e) {
      // Manejar el error
      print('Error al crear el lugar: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Oplaces'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: createOplace,
              child: Text('Crear Oplace'),
            ),
            // Lista de Oplaces existentes
            Expanded(
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
          ],
        ),
      ),
    );
  }
}
