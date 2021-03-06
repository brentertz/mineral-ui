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
import { mineralTheme } from '../../../../../../themes';
import Card, { CardBlock, CardImage, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'with-image',
  title: 'Displaying an Image in a Card',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: 'CardImages should provide an `alt` attribute.',
  scope: { Card, CardBlock, CardImage, CardTitle, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardImage src="/images/500x281.png" alt="gradient image" />
        <CardTitle minor>Minor Card Title</CardTitle>
        <CardBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        </CardBlock>
      </Card>
    </DemoLayout>`
};
