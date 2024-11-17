/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as Test2Import } from './routes/test_2'
import { Route as TestImport } from './routes/test'
import { Route as ExpensesImport } from './routes/expenses'
import { Route as CreateExpenseImport } from './routes/create-expense'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const Test2Route = Test2Import.update({
  path: '/test_2',
  getParentRoute: () => rootRoute,
} as any)

const TestRoute = TestImport.update({
  path: '/test',
  getParentRoute: () => rootRoute,
} as any)

const ExpensesRoute = ExpensesImport.update({
  path: '/expenses',
  getParentRoute: () => rootRoute,
} as any)

const CreateExpenseRoute = CreateExpenseImport.update({
  path: '/create-expense',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/create-expense': {
      id: '/create-expense'
      path: '/create-expense'
      fullPath: '/create-expense'
      preLoaderRoute: typeof CreateExpenseImport
      parentRoute: typeof rootRoute
    }
    '/expenses': {
      id: '/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof ExpensesImport
      parentRoute: typeof rootRoute
    }
    '/test': {
      id: '/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestImport
      parentRoute: typeof rootRoute
    }
    '/test_2': {
      id: '/test_2'
      path: '/test_2'
      fullPath: '/test_2'
      preLoaderRoute: typeof Test2Import
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  CreateExpenseRoute,
  ExpensesRoute,
  TestRoute,
  Test2Route,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/create-expense",
        "/expenses",
        "/test",
        "/test_2"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/create-expense": {
      "filePath": "create-expense.tsx"
    },
    "/expenses": {
      "filePath": "expenses.tsx"
    },
    "/test": {
      "filePath": "test.tsx"
    },
    "/test_2": {
      "filePath": "test_2.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
