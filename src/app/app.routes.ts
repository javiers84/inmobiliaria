import { RouterModule, Routes } from '@angular/router';

import { AgregarPropComponent } from './componentes/agregar-prop/agregar-prop.component';
import { AgregarAdministracionComponent } from './componentes/agregar-administracion/agregar-administracion.component';
import { AgregarCartelComponent } from './componentes/agregar-cartel/agregar-cartel.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { AgregarSliderComponent } from './componentes/agregar-slider/agregar-slider.component';
import { AgregarUserComponent } from './componentes/agregar-user/agregar-user.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DetallepropComponent } from './componentes/detalleprop/detalleprop.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListarAdministracionComponent } from './componentes/listar-administracion/listar-administracion.component';
import { ListarCartelesComponent } from './componentes/listar-carteles/listar-carteles.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { ListarPropComponent } from './componentes/listar-prop/listar-prop.component';
import { ListarSliderComponent } from './componentes/listar-slider/listar-slider.component';
import { ListarUsersComponent } from './componentes/listar-users/listar-users.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModificarAdministracionComponent } from './componentes/modificar-administracion/modificar-administracion.component';
import { ModificarCartelComponent } from './componentes/modificar-cartel/modificar-cartel.component';
import { ModificarClienteComponent } from './componentes/modificar-cliente/modificar-cliente.component';
import { ModificarPropComponent } from './componentes/modificar-prop/modificar-prop.component';
import { ModificarSliderComponent } from './componentes/modificar-slider/modificar-slider.component';
import { ModificarUsersComponent } from './componentes/modificar-users/modificar-users.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';
import { ServiciosempComponent } from './componentes/serviciosemp/serviciosemp.component';
import { VerMasClienteComponent } from './componentes/ver-mas-cliente/ver-mas-cliente.component';
import { FichasComponent } from './componentes/fichas/fichas.component';

import { authGuardGuard } from './guards/auth-guard.guard';
import { validarTokenGuard } from './guards/validar-token.guard';
import { rolesGuard } from './guards/roles.guard';

const routes: Routes = [
    { path: 'home', component: PrincipalComponent},
    { path: 'contacto', component: ContactoComponent},
    { 
        path: 'dashboard', component: DashboardComponent,
        data:{
            role: ['administrador', 'encargado']
          },
          canActivate: [authGuardGuard, validarTokenGuard, rolesGuard], canLoad: [validarTokenGuard],
        children: [
            { path: 'agregar-administracion', component: AgregarAdministracionComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'agregar-cartel', component: AgregarCartelComponent, data:{
                role: ['administrador', 'encargado']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'agregar-cliente', component: AgregarClienteComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'agregar-prop', component: AgregarPropComponent, data:{
                role: ['administrador', 'encargado']
            }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'agregar-slider', component: AgregarSliderComponent, data:{
                role: ['administrador', 'encargado']
            }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
        { path: 'agregar-user', component: AgregarUserComponent, data:{
            role: ['administrador']
          }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
    },
            { path: 'listar-administracion', component: ListarAdministracionComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'listar-cartel', component: ListarCartelesComponent, data:{
                role: ['administrador', 'encargado']
              },canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'listar-cliente', component: ListarClienteComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'verMas-cliente/:id', component: VerMasClienteComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'listar-prop', component: ListarPropComponent, data:{
                role: ['administrador', 'encargado']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'listar-sliders', component: ListarSliderComponent, data:{
                role: ['administrador', 'encargado']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'listar-users', component: ListarUsersComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'modificar-administracion/:id', component: ModificarAdministracionComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'modificar-cartel/:id', component: ModificarCartelComponent, data:{
                role: ['administrador', 'encargado']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'modificar-cliente/:id', component: ModificarClienteComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'modificar-prop/:id', component: ModificarPropComponent, data:{
                role: ['administrador', 'encargado']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'modificar-users/:id', component: ModificarUsersComponent, data:{
                role: ['administrador']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: 'modificar-slider/:id', component: ModificarSliderComponent, data:{
                role: ['administrador', 'encargado']
              }, canActivate: [authGuardGuard, validarTokenGuard], canLoad: [validarTokenGuard]
        },
            { path: '**', pathMatch: 'full', redirectTo: 'agregar-prop'}
        ]
    },
    { path: 'detalle-prop/:id', component: DetallepropComponent},
    { path: 'ficha/:id/:idAgente', component: FichasComponent},
    { path: 'empresa', component: EmpresaComponent},
    { path: 'propiedades', component: PropiedadesComponent},
    { path: 'login', component: LoginComponent},
    { path: 'servicios', component: ServiciosempComponent},
    { path: '**', component: PrincipalComponent},
];

export const APP_ROUTING = RouterModule.forRoot(routes, {
    useHash: true
});