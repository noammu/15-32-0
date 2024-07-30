import classNames from 'classnames';
import styles from './third-library.module.scss';
import { Accordion, Input, Select, Statistic, Form, TextArea } from 'semantic-ui-react';

export interface ThirdLibraryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
];

export const ThirdLibrary = ({ className }: ThirdLibraryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Form>
                <TextArea placeholder="Tell us more" />
            </Form>
            <Accordion
                defaultActiveIndex={0}
                panels={[
                    {
                        key: 'panel-1',
                        title: 'What is a dog?',
                        content: (
                            <Accordion.Content>
                                <p>
                                    A dog is a type blklfdsk sk lsdfsof domesticated animal. Known
                                    for its loyalty and faithfulness, it can be found as a welcome
                                    guest in many households across the world.
                                </p>
                            </Accordion.Content>
                        ),
                    },
                    {
                        key: 'panel-2',
                        title: 'What kinds of dogs are there?',
                        content: (
                            <Accordion.Content>
                                <p>
                                    There are many breeds of dogs. Each breed varies in size and
                                    temperament. Owners often select a breed of dog that they find
                                    to be compatible with their own lifestyle and desires from a
                                    companion.
                                </p>
                            </Accordion.Content>
                        ),
                    },
                    {
                        key: 'panel-3',
                        title: 'How do you acquire a dog?',
                        content: (
                            <Accordion.Content>
                                <p>
                                    Three common ways for a prospective owner to acquire a dog is
                                    from pet shops, private owners, or shelters.
                                </p>
                                <p>
                                    A pet shop may be the most convenient way to buy a dog. Buying a
                                    dog from a private owner allows you to assess the pedigree and
                                    upbringing of your dog before choosing to take it home. Lastly,
                                    finding your dog from a shelter, helps give a good home to a dog
                                    who may not find one so readily.
                                </p>
                            </Accordion.Content>
                        ),
                    },
                ]}
                styled
            />
            <Input
                action={{
                    color: 'teal',
                    labelPosition: 'right',
                    icon: 'copy',
                    content: 'Copy',
                }}
                defaultValue="http://ww.short.url/c0opq"
            />
            <Select placeholder="Select your country" options={countryOptions} />
            <Statistic>
                <Statistic.Value>5,550</Statistic.Value>
                <Statistic.Label>Downloads</Statistic.Label>
            </Statistic>
        </div>
    );
};
