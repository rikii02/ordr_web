import 'package:flutter/material.dart';
import 'pages/home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ordr Software Solutions',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        textTheme: TextTheme(
          headline6: TextStyle(
            color: Colors.brown[800], // Título en marrón oscuro
            fontSize: 24,
          ),
        ),
      ),
      home: MyHomePage(),
    );
  }
}