/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import Loadable from '../Loadable';

type Page = {
  component: React$ComponentType<*>,
  id?: string,
  path: string,
  hiddenInNav?: boolean,
  title: string
};

type Pages = Array<Page>;

type Section = {
  heading: string,
  pages: Pages
};

const sections: Array<Section> = [
  {
    heading: 'Guidelines',
    pages: [
      {
        component: Loadable({
          loader: () => import('./GettingStarted')
        }),
        path: '/getting-started',
        title: 'Getting Started'
      },
      {
        component: Loadable({
          loader: () => import('./Color')
        }),
        path: '/color',
        title: 'Color'
      },
      {
        component: Loadable({
          loader: () => import('./Typography')
        }),
        path: '/typography',
        title: 'Typography'
      }
    ]
  },
  {
    heading: 'What’s New',
    pages: [
      {
        component: Loadable({
          loader: () => import('./ComponentStatus')
        }),
        path: '/component-status',
        title: 'Component Status'
      },
      {
        component: Loadable({
          loader: () => import('./Roadmap')
        }),
        path: '/roadmap',
        title: 'Roadmap'
      }
    ]
  },
  {
    heading: 'Customization',
    pages: [
      {
        component: Loadable({
          loader: () => import('./Styling')
        }),
        path: '/styling',
        title: 'Styling'
      },
      {
        component: Loadable({
          loader: () => import('./Theming')
        }),
        path: '/theming',
        title: 'Theming'
      },
      {
        component: Loadable({
          loader: () => import('./PaletteDemo')
        }),
        path: '/palette-demo',
        title: 'Palette Demo'
      }
    ]
  }
];

export default sections;
