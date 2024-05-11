import React from "react"
import "./style.css"
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Button, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { isValidPhoneNumber } from "libphonenumber-js";


const AddBookingForm = (props) => {
    const [value, setValue] = React.useState('+91');
    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const schema = yup
        .object({
            name: yup.string().required(),
            owner: yup.string().required(),
            email: yup.string().email().required(),
            offeringName: yup.string().required(),
            payout: yup.string().required(),
            phone: yup.string().required().test({
                name: 'is-phone',
                skipAbsent: true,
                test(value, ctx) {
                    if (!value.startsWith('+91')) {
                        return ctx.createError({ message: 'Phone no should be Indian' })
                    }
                    if (!(value.split(" ", 3)[1])) {
                        return ctx.createError({ message: 'Phone no is required' })
                    }
                    if (!isValidPhoneNumber(value)
                    ) {
                        return ctx.createError({ message: 'Phone no should be of 10 digits' })
                    }

                    return true
                }
            }),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div className="add-booking-form-page">
            <div className="add-booking-form">
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #bdbfbe" }}>
                    <h1>Add a new booking</h1>
                    <XMarkIcon onClick={()=> props.setOpenAddForm(false)} className="icon" />
                </div>

                <form onSubmit={handleSubmit((data) => {

                    // handleUser("step1Form", data);
                    props.addNewCustomer(data);
                    props.setOpenAddForm(false);
                })}>
                    <div className="input-field">
                        <label>Customer Name</label>
                        <TextField size="small" id="outlined-basic" label="" variant="outlined"{...register("name")}
                            error={errors.name && true}
                            helperText={errors.name ? errors.name.message : ""} />
                        <label>Phone No</label>
                        <MuiTelInput size="small" value={value}
                            {...register("phone")}
                            onChange={handleChange}
                            error={errors.phone && true}
                            helperText={errors.phone ? errors.phone.message : ""} />

                        <label>Email ID</label>
                        <TextField size="small" id="outlined-basic" label="" variant="outlined" {...register("email")}
                            error={errors.email && true}
                            helperText={errors.email ? errors.email.message : ""} />
                        <label>Offering Owner</label>
                        <TextField size="small" id="outlined-basic" label="" variant="outlined"  {...register("owner")}
                            error={errors.owner && true}
                            helperText={errors.owner ? errors.owner.message : ""} />
                        <label>Offering Name</label>
                        <TextField size="small" id="outlined-basic" label="" variant="outlined" {...register("offeringName")}
                            error={errors.offeringName && true}
                            helperText={errors.offeringName ? errors.offeringName.message : ""} />
                        <label>Payout Status</label>
                        <TextField size="small" id="outlined-basic" label="" variant="outlined" {...register("payout")}
                            error={errors.payout && true}
                            helperText={errors.payout ? errors.payout.message : ""} />
                    </div>
                    <div style={{ gap: "5px", display: "flex", justifyContent: "end", margin: "10px" }}>
                        <Button onClick={()=> props.setOpenAddForm(false)} type="reset" sx={{ color: "#6b1091" }}  >cancel</Button>
                        <Button type="submit" sx={{ background: "#6b1091" }} variant="contained" >Submit</Button>
                    </div>
                </form>

            </div>

        </div >
    )
};

export default AddBookingForm;
