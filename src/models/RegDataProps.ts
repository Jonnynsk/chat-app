import { DataProps } from './DataProps'

export interface RegDataProps extends DataProps {
	password_confirm: string
	name: string
	gender_id: number
}
