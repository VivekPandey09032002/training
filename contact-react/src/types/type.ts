import { LoaderFunction } from "react-router-dom";

export type Contact = {
	id: number;
	firstName: string;
	lastName: string;
	avatar: string;
	twitter: string;
	notes: string;
	favorite: boolean;
};

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
	ReturnType<TLoaderFn>
> extends Response | infer D
	? D
	: never;
