import 'package:flutter/material.dart';

class OplaceForm extends StatelessWidget {
  final TextEditingController nameController;
  final TextEditingController otagController;
  final TextEditingController descriptionController;
  final Function() onCreatePressed;

  const OplaceForm({
    Key? key,
    required this.nameController,
    required this.otagController,
    required this.descriptionController,
    required this.onCreatePressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Crear Oplace'),
      content: SingleChildScrollView(
        child: Column(
          children: [
            TextField(
              controller: nameController,
              decoration: InputDecoration(labelText: 'Nombre'),
            ),
            TextField(
              controller: otagController,
              decoration: InputDecoration(labelText: 'Otag'),
            ),
            TextField(
              controller: descriptionController,
              decoration: InputDecoration(labelText: 'Descripción'),
            ),
          ],
        ),
      ),
      actions: [
        ElevatedButton(
          onPressed: onCreatePressed,
          child: Text('Añadir Oplace'),
        ),
      ],
    );
  }
}
