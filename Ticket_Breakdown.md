# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here



Ticket 1: Add Custom Id field to Agents table

Description:
The Agents table in the database needs to be modified to include a custom Id field where Facilities can save their own custom ids for each Agent.

Acceptance Criteria:

It is necessary to create a new column "custom Id"  to the Agents table.
The new column is editable by facilities through the web application.
The custom id can be up to 20 characters long.
The custom id is unique.
The custom id is displayed on the reports generated for the user facility .
Effort Estimate:
4 hours

Implementation Details:

Write a SQL migration script to add the "Custom Id" column to the Agents table. It is neccesary that the
data base should be SQL in order to idetify the user information with primary keys and foreign keys.
Update the agents model in the application to include the new "Custom Id" field.
Create a form in the web application for Facilities to edit the custom ids for their agents.
Update the generateReport function to use the custom id instead of the internal database id when displaying the Agent's id on the report.
Ticket 2: Update Shifts table to store Custom Id
Effort Estimate:
2 days

Description:
The Shifts table in the database needs to be modified to store the Custom Id for each agent instead of the internal database id.

Acceptance Criteria:

The Shifts table is updated to include a custom Id column.
The Custom Id for the Agent is saved in the Shifts table and the internal database id to identify the agent information.
The agent can be avalible to see his/she Id when generating the report for the Facility.
Effort Estimate:
3 hours

Implementation Details:

Write a SQL migration script to add the "Custom Id" column to the Shifts table.
Update the Shifts model in the application to include the new "Custom Id" field.
Update the getShiftsByFacility function to return the Custom Id for each Agent instead of the internal database id.
Ticket 3: Update generateReport function to use Custom Id

Description:
The generateReport function needs to be updated to use the Custom Id instead of the internal database id when displaying the Agent's id on the report.

Acceptance Criteria:

The generateReport function is updated to use the Custom Id instead of the internal database id when displaying the Agent's id on the report.
The report includes the Custom Id for each Agent instead of the internal database id.
Effort Estimate:
2 hours

Implementation Details:

Update the generateReport function to use the Custom Id instead of the internal database id when displaying the Agent's id on the report.
Ticket 4: Update API endpoint to return Custom Id

Description:
The API endpoint that returns information about the Agent needs to be updated to return the Custom Id instead of the internal database id.

Acceptance Criteria:

The API endpoint that returns information about the Agent is updated to return the Custom Id instead of the internal database id.
Effort Estimate:
2 hours

Implementation Details:

Update the API endpoint to return the Custom Id instead of the internal database id.
Ticket 5: Add validation for unique Custom Id per Facility

Description:
Validation needs to be added to ensure that the Custom Id entered by the Facility is unique for their account.

Acceptance Criteria:

When editing the Custom Id for an Agent, validation is added to ensure that the custom Id is unique per Facility.
If the custom Id is not unique an error message should be  displayed in the web application.
Effort Estimate:
2-3 hours
