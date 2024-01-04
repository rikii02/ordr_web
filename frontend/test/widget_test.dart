import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/main.dart' as app;

void main() {
  group('MyApp', () {
    testWidgets('Renders MyApp', (WidgetTester tester) async {
      // Build our app and trigger a frame.
      await tester.pumpWidget(const app.MyApp());

      // Verify that the title is displayed.
      expect(find.text('Ordr Software Solutions'), findsOneWidget);
    });
  });
}