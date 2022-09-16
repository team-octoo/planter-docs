import { FC } from 'react';
import { Button } from '../../../../../components/basics';
import { ControlledForm } from '../../../../../components/elements';
import Select from '../../../../../components/elements/FormControls/Select';

interface Props {};

const DiscoverabilityModule: FC<Props> = () => {
    return (
        <div className="grid grid-cols-6">
            <div className="col-span-3">
                <ControlledForm>
                    <div className="flex items-center gap-3 w-full">
                        <div className="flex-1">
                            <Select name="Discoverability">
                                <option value="private">Private</option>
                                <option value="public">Public</option>
                            </Select>
                        </div>
                        <Button type="submit">Save</Button>
                    </div>
                </ControlledForm>
            </div>
        </div>
    )
}

export default DiscoverabilityModule;