//array de rutas

export const dataRouteAdmin = [
  {
    id: 1,
    title: "Gestionar Usuarios",
    routes: [
      {
        id: 1,
        title: "Ver Usuarios",
        path: "/verUsuarios",
        component: "VerUsuarios",
      },
      {
        id: 2,
        title: "Agregar Usuario",
        path: "/agregarUsuario",
        component: "CrearUsuario",
      },
    ],
  },
  {
    id: 2,
    title: "Gestionar Menores",
    routes: [
      {
        id: 1,
        title: "Ver Menores",
        path: "/verMenores",
      },
      {
        id: 2,
        title: "Agregar Menores",
        path: "/agregarMenores",
      },
    ],
  },
  {
    id: 3,
    title: "Gestionar Administradores",
    routes: [
      {
        id: 1,
        title: "Ver Administradores",
        path: "/verAdministradores",
      },
      {
        id: 2,
        title: "Agregar Administradores",
        path: "/agregarAdministradores",
      },
    ],
  },

];



//array de rutas

export const dataRouteTutor = [

    {
      id: 1,
      title: "Gestionar Menores",
      routes: [
        {
          id: 1,
          title: "Ver Menores",
          path: "/verMenores",
        },
        {
          id: 2,
          title: "Agregar Menores",
          path: "/agregarMenores",
        },

      ],
    },
  
  ];
  