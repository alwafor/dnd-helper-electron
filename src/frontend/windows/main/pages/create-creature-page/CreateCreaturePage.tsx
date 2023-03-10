import React, { useState } from 'react';
import { FieldErrors, useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CreateCreaturePage.module.css';
import { ICreatureData } from '../../types/creatureTypes';
import { StatsInputBlock } from '../../components/pages/create-creature-page/StatsInputBlock';
import { NameInputBlock } from '../../components/pages/create-creature-page/NameInputBlock';
import { HeadInputBlock } from '../../components/pages/create-creature-page/HeadInputBlock';
import { SaveThrowsInputBlock } from '../../components/pages/create-creature-page/SaveThrowsInputBlock';
import { QuantitativeInputBlock } from '../../components/pages/create-creature-page/QuantitativeInputBlock';
import { SpeedInputBlock } from '../../components/pages/create-creature-page/SpeedInputBlock';
import { VisionInputBlock } from '../../components/pages/create-creature-page/VisionInputBlock';
import { SkillsInputBlock } from '../../components/pages/create-creature-page/SkillsInputBlock';
import { DescriptionInputBlock } from '../../components/pages/create-creature-page/DescriptionInputBlock';
import { DynamicNameValueInputBlock } from '../../components/pages/create-creature-page/DynamicNameValueInputBlock';
import { Textarea } from '../../components/reusable/textareas/Textarea';
import { Input } from '../../components/reusable/inputs/Input';
import { Button } from '../../components/reusable/buttons/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  addCreature,
  modifyCreature,
} from '../../redux/reducers/creaturesReducer';

export const CreateCreaturePage: React.FC = () => {
  const formValues = useAppSelector((state) => state.createCreature.formValues);
  const allCreaturesNames = useAppSelector((state) =>
    state.creatures.creatures.map((creature) => creature.name),
  );
  const { creatureName } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [customError, setCustomError] = useState('');

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<ICreatureData>({
    defaultValues: formValues,
  });

  const {
    fields: fieldsParameters,
    append: appendParameter,
    remove: removeParameter,
  } = useFieldArray<ICreatureData>({ control, name: 'parameters' });

  const {
    fields: fieldsFeatures,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray<ICreatureData>({ control, name: 'features' });

  const {
    fields: fieldsActions,
    append: appendAction,
    remove: removeAction,
  } = useFieldArray<ICreatureData>({ control, name: 'actions' });

  const {
    fields: fieldsLegendaryActions,
    append: appendLegendaryAction,
    remove: removeLegendaryAction,
  } = useFieldArray<ICreatureData>({
    control,
    name: 'legendaryActions',
  });

  const {
    fields: fieldsLairActions,
    append: appendLairAction,
    remove: removeLairAction,
  } = useFieldArray<ICreatureData>({ control, name: 'lairActions' });

  const {
    fields: fieldsRegionalEffects,
    append: appendRegionalEffect,
    remove: removeRegionalEffect,
  } = useFieldArray<ICreatureData>({
    control,
    name: 'regionalEffects',
  });

  const watchImageUrl = watch('imageUrl');

  const watchStats = watch([
    'strength',
    'agility',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma',
  ]);
  const namedStats = {
    strength: watchStats[0],
    agility: watchStats[1],
    constitution: watchStats[2],
    intelligence: watchStats[3],
    wisdom: watchStats[4],
    charisma: watchStats[5],
  };
  const watchProficiencyBonus = watch('proficiencyBonus');

  const isRedo = !!creatureName;

  const onSubmit = (data: ICreatureData) => {
    if (!isRedo) {
      if (allCreaturesNames.includes(data.name)) {
        setCustomError('???????????????? ?? ?????????? ???????????? ?????? ????????????????????!');
        return;
      }
      dispatch(addCreature(data));
    } else {
      dispatch(
        modifyCreature({
          creatureData: data,
          oldName: creatureName,
        }),
      );
    }
    navigate(`/creature/${data.name}`);
  };

  const formErrorMessage = (errors: FieldErrors<ICreatureData>) => {
    if (errors.actions?.length) return '???????? ???????????????? ???? ??????????????????!';
    if (errors.parameters?.length) return '???????? ???????????????? ???? ??????????????????!';

    if (errors.name?.type === 'required') return '?????? ???? ??????????????????!';
    if (errors.type?.type === 'required') return '?????? ???? ????????????!';
    if (errors.worldview?.type === 'required')
      return '?????????????????????????? ???? ??????????????!';
    if (errors.size?.type === 'required') return '???????????? ???? ????????????!';
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <HeadInputBlock watchImageUrl={watchImageUrl} control={control} />
      <div className={styles.inputBlocksWrapper}>
        <NameInputBlock control={control} />
        <StatsInputBlock control={control} />
        <SaveThrowsInputBlock
          control={control}
          stats={watchStats}
          proficiencyBonus={watchProficiencyBonus}
        />
        <QuantitativeInputBlock control={control} />
        <SpeedInputBlock control={control} />
        <VisionInputBlock control={control} />
        <SkillsInputBlock
          control={control}
          stats={namedStats}
          proficiencyBonus={watchProficiencyBonus}
        />

        <DynamicNameValueInputBlock
          fields={fieldsParameters}
          append={appendParameter}
          control={control}
          remove={removeParameter}
          ValueComponent={Input}
          dynamicFormName="parameters"
          title="???????????? ??????????????????"
          nameFieldName="????????????????"
          valueFieldName="????????????????"
        />
        <DynamicNameValueInputBlock
          fields={fieldsFeatures}
          append={appendFeature}
          control={control}
          remove={removeFeature}
          ValueComponent={Textarea}
          dynamicFormName="features"
          title="??????????????????????"
          nameFieldName="????????????????"
          valueFieldName="????????????????"
          isRemoveButtonOnTop
        />
        <DynamicNameValueInputBlock
          fields={fieldsActions}
          append={appendAction}
          control={control}
          remove={removeAction}
          ValueComponent={Textarea}
          dynamicFormName="actions"
          title="????????????????"
          nameFieldName="????????????????"
          valueFieldName="????????????????"
          isRemoveButtonOnTop
        />
        <DynamicNameValueInputBlock
          fields={fieldsLegendaryActions}
          append={appendLegendaryAction}
          control={control}
          remove={removeLegendaryAction}
          ValueComponent={Textarea}
          dynamicFormName="legendaryActions"
          title="?????????????????????? ????????????????"
          nameFieldName="????????????????"
          valueFieldName="????????????????"
          isRemoveButtonOnTop
        />
        <DynamicNameValueInputBlock
          fields={fieldsLairActions}
          append={appendLairAction}
          control={control}
          remove={removeLairAction}
          ValueComponent={Textarea}
          dynamicFormName="lairActions"
          title="???????????????? ????????????"
          nameFieldName="????????????????"
          valueFieldName="????????????????"
          isRemoveButtonOnTop
        />
        <DynamicNameValueInputBlock
          fields={fieldsRegionalEffects}
          append={appendRegionalEffect}
          control={control}
          remove={removeRegionalEffect}
          ValueComponent={Textarea}
          dynamicFormName="regionalEffects"
          title="?????????????? ??????????????????"
          nameFieldName="????????????????"
          valueFieldName="????????????????"
          isRemoveButtonOnTop
        />

        <DescriptionInputBlock control={control} />
      </div>
      <div className={styles.error}>{formErrorMessage(errors)}</div>
      <div className={styles.error}>{customError}</div>
      <Button className={styles.btnSubmit}>
        {!isRedo ? '?????????????????? ????????????????' : '?????????????????? ????????????????????????????'}
      </Button>
    </form>
  );
};
