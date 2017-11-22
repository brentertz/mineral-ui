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
import React from 'react';
import { createStyledComponent } from '../../../../styles';
import { mineralTheme } from '../../../../themes';
import Card, { CardBlock, CardTitle, CardImage } from '../../../../Card';

const CardList = createStyledComponent('div', ({ theme }) => ({
  '& > div': {
    marginBottom: theme.space_stack_sm
  }
}));

const backgroundColor = mineralTheme.color_gray_10;

export default {
  card: [
    {
      type: 'do',
      backgroundColor,
      title: 'Use a Card',
      description:
        'Use a Card when you have different kinds of related content representing one data object.',
      example: (
        <Card>
          <CardImage src="/images/500x281.png" alt="gradient placeholder" />
          <CardTitle minor subtitle="Card subtitle">
            Card Title
          </CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          </CardBlock>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: `use a Card when a list item would do`,
      description:
        'Cards group elements. Using a List for single pieces of information is a more efficent design.',
      example: (
        <CardList>
          <Card>
            <CardTitle>Friedrich Mohs</CardTitle>
          </Card>
          <Card>
            <CardTitle>Marie Tharp</CardTitle>
          </Card>
          <Card>
            <CardTitle>Alfred Wegener</CardTitle>
          </Card>
        </CardList>
      )
    }
  ],
  cardBlock: [
    {
      type: 'do',
      backgroundColor,
      title: 'use the CardBlock component',
      description:
        'Use the CardBlock component to add formatting to content in your Cards.',
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'forget to use a CardBlock',
      description:
        'Content placed into a Card outside the CardBlock will not have formatting applied.',
      example: (
        <Card>
          <CardTitle minor>Minor Card Title</CardTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </p>
          <img
            src="/images/200x200.png"
            alt="gradient placeholder"
            style={{ maxWidth: '100%' }}
          />
        </Card>
      )
    }
  ],
  cardImage: [
    {
      type: 'do',
      backgroundColor,
      title: 'use the CardImage component',
      description:
        'Use the CardImage component with `src` and `alt` attributes.',
      example: (
        <Card>
          <CardImage src="/images/690x690.png" alt="gradient placeholder" />
          <CardTitle minor>Minor Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'put multiple images loose in a Card',
      description:
        'Using regular `<img />` tags will result in unformatted content.',
      example: (
        <Card>
          <img src="/images/125x125.png" alt="gradient placeholder" />
          <img src="/images/125x125.png" alt="gradient placeholder" />
          <CardTitle minor>Minor Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      )
    }
  ],
  cardTitle: [
    {
      type: 'do',
      backgroundColor,
      title: 'use the CardTitle component',
      description: 'Use the CardTitle component to add headings to your Cards.',
      example: (
        <Card>
          <CardTitle minor>Minor Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'use custom heading sizes',
      description:
        'Regular `<h1>, <h2>` etc. will not be formatted automatically.',
      example: (
        <Card>
          <h1>Heading element</h1>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat.
          </CardBlock>
        </Card>
      )
    }
  ]
};
