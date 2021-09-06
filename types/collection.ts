export interface Collection {
    data: Datum[];
}

export interface Datum {
    collection:  string;
    note:        null;
    hidden:      boolean;
    single:      boolean;
    managed:     boolean;
    fields:      { [key: string]: FieldValue };
    icon:        null;
    translation: null;
}

export interface FieldValue {
    collection:     string;
    field:          string;
    datatype:       Datatype | null;
    unique:         boolean;
    primary_key:    boolean;
    auto_increment: boolean;
    default_value:  null | string;
    note:           null | string;
    signed:         boolean;
    id:             number | null;
    type:           string;
    sort:           number | null;
    interface:      null | string;
    hidden_detail:  boolean;
    hidden_browse:  boolean;
    required:       boolean;
    options:        PurpleOptions | null;
    locked:         number | null;
    translation:    null;
    readonly:       boolean;
    width:          Width | null;
    validation:     null | string;
    group:          null;
    length:         null | string;
}

export enum Datatype {
    Bigint = "BIGINT",
    Char = "CHAR",
    Date = "DATE",
    Datetime = "DATETIME",
    Int = "INT",
    Longtext = "LONGTEXT",
    Mediumtext = "MEDIUMTEXT",
    Text = "TEXT",
    Time = "TIME",
    Timestamp = "TIMESTAMP",
    Tinyint = "TINYINT",
    Varchar = "VARCHAR",
}

export interface PurpleOptions {
    choices?:            { [key: string]: string };
    placeholder?:        string;
    allow_other?:        boolean;
    formatting?:         boolean | FormattingEnum;
    iconRight?:          string;
    showRelative?:       boolean;
    size?:               number | string;
    wrapWithDelimiter?:  boolean;
    url_template?:       string;
    tinymce_options?:    null;
    toolbar?:            string[];
    custom_formats?:     null;
    grid?:               number;
    fields?:             FieldElement[] | string;
    template?:           Template;
    sort_field?:         string;
    delete_mode?:        string;
    allow_create?:       boolean;
    allow_select?:       boolean;
    trim?:               boolean;
    showCharacterCount?: boolean;
    formatValue?:        boolean;
    monospace?:          boolean;
    include_system?:     boolean;
    createItemText?:     string;
    style?:              string;
    title?:              string;
    hr?:                 boolean;
    localized?:          boolean;
    crop?:               boolean;
    viewType?:           string;
    viewOptions?:        ViewOptions;
    viewQuery?:          any[];
    filters?:            any[];
    allowDelete?:        boolean;
    display24HourClock?: boolean;
    margin?:             boolean;
    description?:        string;
    draggable?:          boolean;
    wrap?:               boolean;
    single?:             boolean;
    validationMessage?:  string;
    alphabetize?:        boolean;
    lowercase?:          boolean;
    format?:             boolean;
    sanitize?:           boolean;
    ""?:                 string;
    edit?:               string[];
    limit?:              boolean;
    visible_fields?:     string;
    threshold?:          number | string;
    keyInterface?:       string;
    keyDataType?:        Type;
    keyOptions?:         Options;
    valueInterface?:     string;
    valueDataType?:      Type;
    valueOptions?:       Options;
    display?:            Display;
    simpleBadge?:        boolean;
    status_mapping?:     StatusMapping;
    icon?:               string;
    languageField?:      LanguageField;
    languages?:          Languages;
    rows?:               number;
    serif?:              boolean;
}

export enum Display {
    Both = "both",
}

export interface FluffyOptions {
    createItemText?: string;
    fields?:         FieldElement[];
    limit?:          boolean;
}

export interface FieldElement {
    field:     string;
    width?:    Width;
    interface: string;
    type:      Type;
    options?:  FluffyOptions;
}

export enum Type {
    JSON = "JSON",
    String = "string",
}

export enum Width {
    Fill = "fill",
    Full = "full",
    Half = "half",
    HalfLeft = "half-left",
    HalfRight = "half-right",
    HalfSpace = "half-space",
}

export enum FormattingEnum {
    Text = "text",
    Value = "value",
}

export interface Options {
    monospace:   boolean;
    placeholder: string;
}

export enum LanguageField {
    Language = "language",
}

export interface Languages {
    en:      En;
    "en-US": EnUS;
    de:      De;
    fr:      Fr;
    es:      Es;
    it:      It;
    nl:      Nl;
    "zh-CN": ZhCN;
    "zh-TW": ZhTW;
    "zh-HK": ZhHK;
    cs:      CS;
    da:      Da;
    fi:      Fi;
    el:      El;
    hr:      Hr;
    hu:      Hu;
    nb:      Nb;
    pl:      Pl;
    pt:      Pt;
    ro:      Ro;
    sr:      Sr;
    ru:      Ru;
    sv:      Sv;
    sl:      Sl;
    sk:      Sk;
    tr:      Tr;
    uk:      Uk;
    bg?:     string;
}

export enum CS {
    CzechCS = "Czech (cs)",
}

export enum Da {
    DanishDa = "Danish (da)",
}

export enum De {
    GermanDe = "German (de)",
}

export enum El {
    GreekEl = "Greek (el)",
}

export enum En {
    EnglishEn = "English (en)",
}

export enum EnUS {
    EnglishEnUS = "English (en-US)",
}

export enum Es {
    SpanishEs = "Spanish (es)",
}

export enum Fi {
    FinishFi = "Finish (fi)",
    FinnishFi = "Finnish (fi)",
}

export enum Fr {
    FrenchFr = "French (fr)",
}

export enum Hr {
    CroatianHr = "Croatian (hr)",
}

export enum Hu {
    HungarianHu = "Hungarian (hu)",
}

export enum It {
    ItalianIt = "Italian (it)",
}

export enum Nb {
    NorwegianNb = "Norwegian (nb)",
}

export enum Nl {
    DutchNl = "Dutch (nl)",
}

export enum Pl {
    PolishPl = "Polish (pl)",
}

export enum Pt {
    PortugesePt = "Portugese (pt)",
}

export enum Ro {
    RomanianRo = "Romanian (ro)",
}

export enum Ru {
    RussianRu = "Russian (ru)",
}

export enum Sk {
    SlovakianSk = "Slovakian (sk)",
}

export enum Sl {
    SlovenianSl = "Slovenian (sl)",
}

export enum Sr {
    SerbianSr = "Serbian (sr)",
}

export enum Sv {
    SwedishSv = "Swedish (sv)",
    SwedishSw = "Swedish (sw)",
}

export enum Tr {
    TurkishTr = "Turkish (tr)",
}

export enum Uk {
    UkrainianUk = "Ukrainian (uk)",
}

export enum ZhCN {
    ChineseZhCN = "Chinese (zh-CN)",
}

export enum ZhHK {
    ChineseZhHK = "Chinese (zh-HK)",
}

export enum ZhTW {
    ChineseZhTW = "Chinese (zh-TW)",
}

export interface StatusMapping {
    draft?:                   Active;
    deleted?:                 Active;
    needs_export_approval?:   Active;
    needs_final_hc_approval?: Active;
    approved_by_hc?:          Active;
    in_translation?:          Active;
    needs_approval?:          Active;
    approved?:                Active;
    outdated?:                Active;
    "needs approval"?:        NeedsApproval;
    needs_export_approva?:    Active;
    needs_final_hc_appro?:    Active;
    invited?:                 Invited;
    active?:                  Active;
    suspended?:               Invited;
    inactive?:                Active;
}

export interface Active {
    name:              string;
    text_color?:       string;
    background_color?: string;
    listing_subdued?:  boolean;
    listing_badge?:    boolean;
    soft_delete?:      boolean;
    value?:            string;
    browse_subdued?:   boolean;
    browse_badge?:     boolean;
    published?:        boolean;
    newItem?:          boolean;
    required_fields?:  boolean;
}

export interface Invited {
    name:             string;
    text_color:       string;
    background_color: string;
    listing_subdued:  boolean;
    listing_badge:    boolean;
    soft_delete:      boolean;
}

export interface NeedsApproval {
    newItem:         boolean;
    name:            string;
    value:           string;
    required_fields: boolean;
}

export enum Template {
    FirstNameLastName = "{{first_name}} {{last_name}}",
    GroupName = "{{ group_name }}",
    Name = "{{ name }}",
    TechnicalTitleIDID = "{{technical_title}} - ID {{id}}",
}

export interface ViewOptions {
    title:    string;
    subtitle: string;
    content:  string;
    src:      string;
}

