FROM ubuntu:22.04

# Instalar dependencias
RUN apt update && apt install -y curl git unzip

# Descargar e instalar Flutter
RUN git clone https://github.com/flutter/flutter.git -b stable
ENV PATH="$PATH:/flutter/bin"

# Ejecutar 'flutter doctor' para instalar dependencias adicionales
RUN flutter doctor

# Limpiar paquetes instalados y caches
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Establecer directorio de trabajo
WORKDIR /app
