export class Geometry {
    constructor(geometry: string);
    constructor(
        width: number,
        height: number,
        x: number,
        y: number
    );
    isValid(): boolean;
    width(): number;
    width(value: number): void;
    height(): number;
    height(value: number): void;
}

export const constants: {
    ChannelType: {
        UndefinedChannel: number;
        RedChannel: number;
        GrayChannel: number;
        CyanChannel: number;
        GreenChannel: number;
        MagentaChannel: number;
        BlueChannel: number;
        YellowChannel: number;
        AlphaChannel: number;
        OpacityChannel: number;
        MatteChannel: number;
        BlackChannel: number;
        IndexChannel: number;
        CompositeChannels: number;
        AllChannels: number;
        /*
          Special purpose channel types.
        */
        TrueAlphaChannel: number;
        RGBChannels: number;
        GrayChannels: number;
        SyncChannels: number;
        DefaultChannels: number;
    };
    CompositeOperator: {
        UndefinedCompositeOp: number;
        NoCompositeOp: number;
        ModulusAddCompositeOp: number;
        AtopCompositeOp: number;
        BlendCompositeOp: number;
        BumpmapCompositeOp: number;
        ChangeMaskCompositeOp: number;
        ClearCompositeOp: number;
        ColorBurnCompositeOp: number;
        ColorDodgeCompositeOp: number;
        ColorizeCompositeOp: number;
        CopyBlackCompositeOp: number;
        CopyBlueCompositeOp: number;
        CopyCompositeOp: number;
        CopyCyanCompositeOp: number;
        CopyGreenCompositeOp: number;
        CopyMagentaCompositeOp: number;
        CopyOpacityCompositeOp: number;
        CopyRedCompositeOp: number;
        CopyYellowCompositeOp: number;
        DarkenCompositeOp: number;
        DstAtopCompositeOp: number;
        DstCompositeOp: number;
        DstInCompositeOp: number;
        DstOutCompositeOp: number;
        DstOverCompositeOp: number;
        DifferenceCompositeOp: number;
        DisplaceCompositeOp: number;
        DissolveCompositeOp: number;
        ExclusionCompositeOp: number;
        HardLightCompositeOp: number;
        HueCompositeOp: number;
        InCompositeOp: number;
        LightenCompositeOp: number;
        LinearLightCompositeOp: number;
        LuminizeCompositeOp: number;
        MinusDstCompositeOp: number;
        ModulateCompositeOp: number;
        MultiplyCompositeOp: number;
        OutCompositeOp: number;
        OverCompositeOp: number;
        OverlayCompositeOp: number;
        PlusCompositeOp: number;
        ReplaceCompositeOp: number;
        SaturateCompositeOp: number;
        ScreenCompositeOp: number;
        SoftLightCompositeOp: number;
        SrcAtopCompositeOp: number;
        SrcCompositeOp: number;
        SrcInCompositeOp: number;
        SrcOutCompositeOp: number;
        SrcOverCompositeOp: number;
        ModulusSubtractCompositeOp: number;
        ThresholdCompositeOp: number;
        XorCompositeOp: number;
    };
    MetricType: {
        UndefinedMetric: number;
        AbsoluteErrorMetric: number;
        MeanAbsoluteErrorMetric: number;
        MeanErrorPerPixelMetric: number;
        MeanSquaredErrorMetric: number;
        PeakAbsoluteErrorMetric: number;
        PeakSignalToNoiseRatioMetric: number;
        RootMeanSquaredErrorMetric: number;
        NormalizedCrossCorrelationErrorMetric: number;
        FuzzErrorMetric: number;
        UndefinedErrorMetric: number;
        PerceptualHashErrorMetric: number;
    };
};

export class Color {
    constructor(value: string);
    constructor(r: number, g: number, b: number);
    constructor(r: number, g: number, b: number, a: number);
    constructor(
        cyan: number,
        magenta: number,
        yellow: number,
        black: number,
        alpha: number
    );
}

export class Image {
    resize(value: Geometry): void;
    oilPaint(radius: number): void;
    emboss(radius: number, sigma: number): void;
    rotate(degrees: number): void;
    normalize(): void;
    backgroundColor(): Color;
    backgroundColor(value: Color): void;
    motionBlur(radius: number, sigma: number,angle:number): void;
    sample(value: Geometry): void;
    scale(value: Geometry): void;
    roll(value: Geometry): void;
    shave(value: Geometry): void;
    crop(value: Geometry): void;
    write(file: string): void;
    read(value: string): void;
    decipher(value: string): void;
    encipher(value: string): void;
    density(): Geometry;
    density(value: Geometry): void;
    size(): Geometry;
    size(value: Geometry): void;
    magick(): string;
    magick(value: string): void;
    defineValue(magick:string,key: string): string;
    defineValue(magick:string,key: string, value: string): void;
    composite(
        compositeImage: Image,
        offset: Geometry,
        compose?: CompositeOperator
    ): void;
    /**
     * False is returned if the images are identical
     */
    compare(ref: Image): boolean;
    compare(ref: Image, metric: MetricType): number;
    negate(grayscale: boolean): void;
}

export type CompositeOperator = number;

export type MetricType = number;
