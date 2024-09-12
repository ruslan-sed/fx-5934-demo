import React from 'react'
import { FormNonCompound, Input, FormSpy } from '@toptal/picasso-forms'
import { FormActionsContainer } from '@toptal/picasso'
import { SPACING_4 } from '@toptal/picasso/utils'

const Demo = () => (
  <FormNonCompound onSubmit={() => {}} layout="horizontal">
    <Input label="Job Title" name="title" />

    <FormActionsContainer bottom={SPACING_4}>
      <div>I should be aligned with the input field</div>
    </FormActionsContainer>
  </FormNonCompound>
)

export default Demo
