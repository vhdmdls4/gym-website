import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button, Grid } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Link } from 'react-router-dom'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/utils/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

enum Plan {
  PLUS = 'plus',
  PREMIUM = 'premium'
}

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long.' })
    .max(50, { message: 'First name must be less than 50 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long.' })
    .max(50, { message: 'Last name must be less than 50 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .max(15, { message: 'Phone number must not exceed 15 digits.' }),
  plan: z.enum([Plan.PLUS, Plan.PREMIUM]),
  zu: z
    .string({
      required_error: 'Please select an email to display.'
    })
    .email(),
  birthdate: z.date({
    message: 'Please enter a valid date in the format YYYY-MM-DD.'
  })
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      plan: Plan.PLUS,
      birthdate: undefined
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  function onSubmit2(data: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid columns={{ xs: '1', sm: '2' }} gap="5" width="auto">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your First Name" {...field} />
                </FormControl>
                <FormDescription className="ps-2">First Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your Last Name" {...field} />
                </FormControl>
                <FormDescription className="ps-2">Last Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your Email" {...field} />
                </FormControl>
                <FormDescription className="ps-2">Email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your Phone" {...field} />
                </FormControl>
                <FormDescription className="ps-2">Phone</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="solid"
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                        color="gray"
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <RadioGroup
            defaultValue={Plan.PREMIUM}
            orientation="horizontal"
            className="flex space-x-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={Plan.PREMIUM}
                id="radio--plan-premium__form-join"
              />
              <Label htmlFor="radio--plan-premium__form-join">
                {Plan.PREMIUM.toUpperCase()}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={Plan.PLUS}
                id="radio--plan-plus__form-join"
              />
              <Label htmlFor="radio--plan-plus__form-join">
                {Plan.PLUS.toUpperCase()}
              </Label>
            </div>
          </RadioGroup>

          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a plan here" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={Plan.PLUS}>
                      {Plan.PLUS.toUpperCase()}
                    </SelectItem>
                    <SelectItem value={Plan.PREMIUM}>{Plan.PREMIUM}</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{' '}
                  <Link to="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button
            size={'4'}
            variant="solid"
            highContrast
            color="gray"
            className="col-span-full"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Form>
  )
}
