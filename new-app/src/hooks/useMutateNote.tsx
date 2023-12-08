import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote, updateNote } from "../service/http";
import { NoteType } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { intialState } from "../screen/Note";

const useMutateNote = (
	setFormData: React.Dispatch<React.SetStateAction<NoteType>>
) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate: createMutation } = useMutation({
		mutationFn: (data: NoteType) => createNote(data),
		onSuccess: () => {
			toast.success("note has been been added");
			setFormData(intialState);
			queryClient.invalidateQueries({
				queryKey: ["notes", { page: 1 }],
			});
			navigate(-1);
		},
		onError: () => {
			toast.error("some error occurred by updating notes");
		},
	});
	const { mutate: updateMutation } = useMutation({
		mutationFn: (data: NoteType) => updateNote(data.id, data),
		onSuccess: () => {
			toast.success("note has been been updated");
			setFormData(intialState);
			queryClient.invalidateQueries({
				queryKey: ["notes", { page: 1 }],
			});
			navigate(-1);
		},
		onError: () => {
			toast.error("some error occurred by updating notes");
		},
	});
	return { createMutation, updateMutation };
};

export default useMutateNote;
