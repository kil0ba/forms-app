import React, { FC } from 'react';
import { useParams } from "react-router";
import { Form } from "react-final-form";
import { FieldArray, FieldArrayProps } from "react-final-form-arrays";
import arrayMutators from 'final-form-arrays'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


import s from './EditForm.module.scss';
import Input from "../../../components/Forms/Input/Input";


const EditForm: FC<EditFormProps> = (props) => {
  const params = useParams<EditFormParams>();

  const submitForm = (values: any, form: any) => {
    console.log(values);
    console.log(form);
  }

  const makeOnDragEndFunction = (fields: FieldArrayProps<any, any>) => (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    fields.move(result.source.index, result.destination.index);
  };

  return (
    <div className={ s.container }>
      <h2 className={ s.pageInfo }> { params.id ? 'Edit' : 'New' } Form </h2>
      <Form
        onSubmit={ submitForm }
        mutators={ {
          ...arrayMutators
        } }
        // subscription={ { submitting: true, pristine: true } }
        render={ ({
                    handleSubmit,
                    form: { mutators: { push, pop }, reset }, // injected from final-form-arrays above
                    pristine,
                    submitting,
                    values
                  }) => {
          return (
            <form onSubmit={ handleSubmit }>
              <Input name='FormName' label='Form Name' inputType='text'/>
              <Input name='FormDescription' label='Form Description' inputType='text'/>
              <div className="buttons">
                <button
                  type="button"
                  onClick={ () => push("customers", { id: null }) }
                >
                  Add Customer
                </button>
                <button type="button" onClick={ () => pop("customers") }>
                  Remove Customer
                </button>
              </div>
              <FieldArray name="customers">
                { ({ fields }) => (
                  <DragDropContext onDragEnd={ makeOnDragEndFunction(fields) }>
                    <Droppable droppableId="droppable">
                      { (provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                        >
                          { fields.map((name, index) => (
                            <Draggable
                              draggableId={ name }
                              index={ index }
                              key={ name }
                            >
                              { (provided, snapshot) => (
                                <div
                                  ref={ provided.innerRef }
                                  { ...provided.draggableProps }
                                  { ...provided.dragHandleProps }
                                >
                                  <Input name={ `${ name }.name` } label='Question' inputType='text' showDeleteBtn/>
                                </div>
                              ) }
                            </Draggable>
                          )) }
                        </div>
                      ) }
                    </Droppable>
                  </DragDropContext>
                ) }
              </FieldArray>

              <div className="buttons">
                <button type="submit" disabled={ submitting || pristine }>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={ reset }
                  disabled={ submitting || pristine }
                >
                  Reset
                </button>
              </div>
              <pre>{ JSON.stringify(values, undefined, 2) }</pre>
            </form>
          )
        } }
      />
    </div>
  );
};

interface EditFormProps {

}

interface EditFormParams {
  id?: string;
}

export default EditForm;
