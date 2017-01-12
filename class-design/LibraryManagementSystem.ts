/*
Library management system
nouns
- librarians
- books
- patrons
	- students
	- faculty 
- borrowing activity
- reference items
- research papers
- collection

verbs
- keep track
- renew
- check out
- purchase
- add to collection
- manage due date
- manage overdue
- calculate fine

adjectives
- overdue
*/

export class Student {
	private age; //might not need this
	private name;
	private borrowed:Book[]; //Books have dewy decimal system
	private amountOwed:Fine;
}