# Club Bolívar Store

Bienvenido a la tienda oficial del Club Bolívar, una aplicación web desarrollada con Next.js que te permite comprar ropa y accesorios del club. Este proyecto utiliza una combinación de tecnologías modernas para ofrecer una experiencia de usuario fluida y atractiva.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para la creación de aplicaciones web rápidas y optimizadas.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces de usuario de manera rápida y eficiente.
- **Framer Motion**: Biblioteca para animaciones en React, utilizada para mejorar la experiencia visual.
- **Prisma**: ORM para bases de datos que facilita la interacción con PostgreSQL.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar la información de productos, usuarios y pedidos.
- **NextAuth.js**: Solución de autenticación para Next.js que permite gestionar el inicio de sesión de los usuarios.
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.
- **Prisma Studio**: Interfaz gráfica para gestionar y visualizar los datos en la base de datos.

## Características

- **Catálogo de Productos**: Navega por una amplia selección de ropa y accesorios del Club Bolívar.
- **Carrito de Compras**: Añade productos al carrito y gestiona tus compras de manera sencilla.
- **Autenticación de Usuarios**: Regístrate e inicia sesión para realizar compras y acceder a tu historial de pedidos.
- **Simulación de Pagos con PayPal**: Realiza pagos utilizando la API de sandbox de PayPal para simular transacciones.
- **Panel de Administración**: Gestiona productos, pedidos y usuarios a través de Prisma Studio.

## Instalación y Configuración

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/club-bolivar-store.git
   cd club-bolivar-store
   ```

2. **Instalar Dependencias**:
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**:
   Edita el archivo `.env.template` en la raíz del proyecto y añade las siguientes variables:
   ```env
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/club_bolivar_store
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=tu_secreto
   PAYPAL_CLIENT_ID=tu_paypal_client_id
   PAYPAL_CLIENT_SECRET=tu_paypal_client_secret
   ```

4. **Iniciar Docker**:
   Asegúrate de tener Docker instalado y ejecuta el siguiente comando para iniciar los contenedores:
   ```bash
   docker-compose up -d
   ```

5. **Ejecutar Migraciones de Prisma**:
   ```bash
   npx prisma migrate dev
   ```

6. **Iniciar la Aplicación**:
   ```bash
   npm run dev
   ```

7. **Acceder a Prisma Studio**:
   ```bash
   npx prisma studio
   ```
