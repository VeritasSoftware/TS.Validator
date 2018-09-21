export interface IValidator<T> {
    For<TProperty>(predicate: Func<T, TProperty>, ruleSet: Func<IRuleSetValidator<T, TProperty>, IValidationResult>): IValidator<T>;
    ForType<TProperty>(predicate: Func<T, TProperty>, ruleSet: Func<IValidator<TProperty>, IValidationResult>): IValidator<T>;
    If(predicate: Func<T, boolean>, then: Func<IValidator<T>, IValidationResult>): IValidator<T>;
    ForEach<TArray>(predicate: Func<T, Array<TArray>>, action: Func<IValidator<TArray>, IValidationResult>): IValidator<T>;
    Required<TProperty>(predicate: Func<T, TProperty>, must: Func2<TProperty, T, boolean>, message: string, errorIdentifier?: string): IValidator<T>;
    NotNull<TProperty>(predicate: Func<T, TProperty>, message: string, errorIdentifier?: string): IValidator<T>;
    IsNull<TProperty>(predicate: Func<T, TProperty>, message: string, errorIdentifier?: string): IValidator<T>;
         
    CreditCard(predicate: Func<T, number>, message: string, errorIdentifier?: string): IValidator<T>;
    
    /* string APIs */
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
    Matches(predicate: Func<T, string>, regex: string, message: string, errorIdentifier?: string): IValidator<T>;
    NotMatches(predicate: Func<T, string>, regex: string, message: string, errorIdentifier?: string): IValidator<T>;
    Email(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;    
    Length(predicate: Func<T, string>, lowerBound: number, upperBound: number, message: string, errorIdentifier?: string): IValidator<T>;
    NotEmpty(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;
    IsEmpty(predicate: Func<T, string>, message: string, errorIdentifier?: string): IValidator<T>;   

    ToResult(): IValidationResult;
}

export interface IRuleSetValidator<T, TProperty>{
    Required(must: Func2<TProperty, T, boolean>, message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    NotNull(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsNull(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>; 

    CreditCard(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;

    /* string APIs */
    IsLowercase(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsUppercase(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsMixedcase(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsNumeric(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsAlpha(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsAlphaNumeric(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;    
    IsGuid(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsBase64(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsUrl(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    Matches(regex: string, message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    NotMatches(regex: string, message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    Email(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    Length(lowerBound: number, upperBound: number, message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    NotEmpty(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;
    IsEmpty(message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;  
    Contains(subString: string, message: string, errorIdentifier?: string): IRuleSetValidator<T, TProperty>;     

    ToResult(): IValidationResult; 
}

export interface IValidatorSync<T> {
    ValidateBase<TBase extends T>(rules: Func<IValidator<TBase>, IValidationResult>): IValidatorSync<T>;
    Validate(action: Func<IValidator<T>, IValidationResult>): IValidationResult;
}

export interface IValidatorAsync<T> {
    ValidateBaseAsync<TBase extends T>(rules: Func<IValidator<TBase>, IValidationResult>): IValidatorAsync<T>;
    ValidateAsync(action: Func<IValidator<T>, IValidationResult>): Promise<IValidationResult>;
}

export interface Action<T> {
    (item: T): void;
}

export interface Func<T, TResult> {
    (item: T): TResult;
}

export interface Func2<T, TProperty, TResult> {
    (property: TProperty, item: T): TResult;
}

export interface IValidationError {
    Message: string;
    Value: any;
    Identifier: string;
}

export interface IValidationResult {
    Errors: IValidationError[];
    IsValid: boolean;

    Identifier(identifier: string): IValidationError;
    IdentifierStartsWith(identifier: string) : IValidationError[];
}