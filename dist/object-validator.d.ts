import { IValidator, IValidationResult, Func, Func2, IRuleSetValidator, IDateRuleSetValidator, IStringRuleSetValidator, INumberRuleSetValidator } from './ivalidator';
import { ValidationResult, ValidationError } from './validation-result';
export declare class ObjectValidator<T> implements IValidator<T> {
    _model: T;
    _validationErrors: ValidationError[];
    _clonedModel: T;
    constructor(model: T);
    For<TProperty>(predicate: Func<T, TProperty>, ruleSet: Func<IRuleSetValidator<T, TProperty>, IValidationResult>): IValidator<T>;
    ForDateProperty(predicate: Func<T, Date>, ruleSet: Func<IDateRuleSetValidator<T>, IValidationResult>): IValidator<T>;
    ForStringProperty(predicate: Func<T, string>, ruleSet: Func<IStringRuleSetValidator<T>, IValidationResult>): IValidator<T>;
    ForNumberProperty(predicate: Func<T, Number>, ruleSet: Func<INumberRuleSetValidator<T>, IValidationResult>): IValidator<T>;
    ForType<TProperty>(predicate: Func<T, TProperty>, ruleSet: Func<IValidator<TProperty>, IValidationResult>): IValidator<T>;
    NotNull<TProperty>(predicate: Func<T, TProperty>, message: string, errorIdentifier?: string): IValidator<T>;
    IsNull<TProperty>(predicate: Func<T, TProperty>, message: string, errorIdentifier?: string): IValidator<T>;
    NotEmpty(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsEmpty(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    Length(predicate: Func<T, string>, lowerBound: number, upperBound: number, message: string, errorIdentifier?: string): IValidator<T>;
    Matches(predicate: Func<T, string>, regex: string, message: string, errorIdentifier?: string): IValidator<T>;
    NotMatches(predicate: Func<T, string>, regex: string, message: string, errorIdentifier?: string): IValidator<T>;
    CreditCard(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    Email(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    If(predicate: Func<T, boolean>, then: Func<IValidator<T>, IValidationResult>): IValidator<T>;
    ForEach<TArray>(predicate: Func<T, Array<TArray>>, action: Func<IValidator<TArray>, IValidationResult>): IValidator<T>;
    IsLowercase(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsUppercase(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsMixedcase(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    Contains(predicate: Func<T, string>, subString: string, message: string, errorIdentifier?: string): IValidator<T>;
    IsNumeric(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsAlpha(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsAlphaNumeric(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsGuid(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsBase64(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsUrl(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsCountryCode(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsDateOn(predicate: Func<T, Date>, date: Date, message: string, errorIdentifier?: string): IValidator<T>;
    IsDateAfter(predicate: Func<T, Date>, date: Date, message: string, errorIdentifier?: string): IValidator<T>;
    IsDateOnOrAfter(predicate: Func<T, Date>, date: Date, message: string, errorIdentifier?: string): IValidator<T>;
    IsDateBefore(predicate: Func<T, Date>, date: Date, message: string, errorIdentifier?: string): IValidator<T>;
    IsDateOnOrBefore(predicate: Func<T, Date>, date: Date, message: string, errorIdentifier?: string): IValidator<T>;
    IsDateBetween(predicate: Func<T, Date>, startDate: Date, endDate: Date, inclusive: boolean, message: string, errorIdentifier?: string): IValidator<T>;
    IsDateLeapYear(predicate: Func<T, Date>, message: string, errorIdentifier?: string): IValidator<T>;
    IsNumberEqual(predicate: Func<T, Number>, number: Number, message: string, errorIdentifier?: string): IValidator<T>;
    IsNumberNotEqual(predicate: Func<T, Number>, number: Number, message: string, errorIdentifier?: string): IValidator<T>;
    IsNumberLessThan(predicate: Func<T, Number>, number: Number, message: string, errorIdentifier?: string): IValidator<T>;
    IsNumberLessThanOrEqual(predicate: Func<T, Number>, number: Number, message: string, errorIdentifier?: string): IValidator<T>;
    IsNumberGreaterThan(predicate: Func<T, Number>, number: Number, message: string, errorIdentifier?: string): IValidator<T>;
    IsNumberGreaterThanOrEqual(predicate: Func<T, Number>, number: Number, message: string, errorIdentifier?: string): IValidator<T>;
    Required<TProperty>(predicate: Func<T, TProperty>, must: Func2<TProperty, T, boolean>, message: string, errorIdentifier?: string): IValidator<T>;
    private getPropertyName(expression);
    private addErrors(errors);
    private processErrors(predicate, val, message, errorIdentifier?);
    ToResult(): ValidationResult;
}
